const { User, Product, Category, CategoryProduct } = require("../../models");

exports.getProducts = async (req, res) => {
  try {
    const products = await Product.findAll({
      include: [
        {
          model: User,
          as: "user",
          attributes: {
            exclude: ["createdAt", "updatedAt", "password"],
          },
        },
        {
          model: Category,
          as: "categories",
          through: {
            model: CategoryProduct,
            as: "bridge",
            attributes: [],
          },
          attributes: {
            exclude: ["createdAt", "updatedAt"],
          },
        },
      ],
      attributes: {
        exclude: ["user_id", "createdAt", "updatedAt"],
      },
    });
    res.send({
      status: "success",
      message: "resource has successfully get",
      data: products,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      status: "failed",
      message: "internal server error",
    });
  }
};

exports.createProduct = async (req, res) => {
  const { category: categoryName, ...productData } = req.body;

  try {
    let product = await Product.create(productData);
    let category = await Category.findOne({
      where: {
        name: categoryName,
      },
    });

    // method 1
    if (category) {
      await CategoryProduct.create({
        category_id: category.id,
        product_id: product.id,
      });
    } else {
      await Category.create({ name: categoryName });
      await CategoryProduct.create({
        category_id: category.id,
        product_id: product.id,
      });
    }

    // method 2
    // if (category) {
    //   product.setCategories(category);
    // } else {
    //   product.createCategory({ name: categoryName });
    // }

    product = await Product.findOne({
      where: {
        id: product.id,
      },
      include: [
        {
          model: User,
          as: "user",
          attributes: {
            exclude: ["createdAt", "updatedAt", "password"],
          },
        },
        {
          model: Category,
          as: "categories",
          through: {
            model: CategoryProduct,
            as: "bridge",
            attributes: [],
          },
          attributes: {
            exclude: ["createdAt", "updatedAt"],
          },
        },
      ],
      attributes: {
        exclude: ["user_id", "createdAt", "updatedAt"],
      },
    });
    res.send({
      status: "success",
      message: "resource has successfully deleted",
      data: product,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      status: "failed",
      message: "internal server error",
    });
  }
};
