import { useState,useContext } from "react";
import { Modal, Button, Form,Alert } from "react-bootstrap";
import { UserContext } from '../contexts/userContext'
import userData from '../data/User'

  function ModalSignin(props) {
    const { show, handleClose,handleLogin } = props; 
  
    const [message, setMessage] = useState('')
    const [data, setData] = useState({
    username: "", 
    password: "",
  });
  
  const [state, dispatch] = useContext(UserContext)
  const {username,password} = data

  const handleOnChange = (e) => {
    const inputanUser=e.target.value
    console.log(inputanUser);
    setData({
        ...data,
        [e.target.name]: e.target.value
    })
}
  
  const handleOnSubmit = (e) => {
    e.preventDefault()
    let dataLogin = false
    // console.log(dataLogin)
    dataLogin = userData.find(
        (user) => user.username === username
        
        )
console.log(dataLogin)
const datas=dataLogin;
console.log(datas)

    if(dataLogin){
        dispatch({
            type: "LOGIN_SUCCESS",
            // payload: dataLogin
            payload: {
              // data yang akan dikirim
                    name: "Alfian",
                    username: data.username,
                    password: data.password
                  }
// console.log(data.username)

        // console.log(dataLogin)

        })
        setMessage('')
        handleClose()
    }else{
        setMessage('Email tidak ditemukan')
    }

    setData({
        username: '',
        password: ''
    })
}
  // const handleOnSubmit = (e) => {
  //   e.preventDefault();
  //   handleLogin({
  //     type: 'LOGIN',
  //     payload: {
  //       id: 1,
  //       name: "Alfian",
  //       email: data.email,
  //       password: data.password
  //     }
  //   })

  //   setData({
  //     email: "",
  //     password: ""
  //   })
  // };
  return (
   <>
    <Modal show={show} onHide={handleClose}>

<Modal.Header>
<Modal.Title>Login</Modal.Title>
</Modal.Header>
<Modal.Body>

<Form onSubmit={handleOnSubmit}>
    { message &&
        <Alert variant="danger" className="py-1">
            {message}
        </Alert>
    }
    <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Control required onChange={handleOnChange} name="username" value={data.username} type="text" placeholder="Username" />
    </Form.Group>
   
    <Form.Group className="mb-3" controlId="formBasicDesc">
        <Form.Control required onChange={handleOnChange} name="password" value={data.password} type="password" placeholder="Password" />
    </Form.Group>
    <Button variant="primary" type="submit">
        Login
    </Button>
</Form>
</Modal.Body>

</Modal>
   </>
  );
};

export default ModalSignin;
