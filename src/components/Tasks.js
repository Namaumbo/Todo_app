import React, { useState } from "react";
import {
  Segment,
  List,

  Icon,
 
  Button,
  Input,
  Form
} from "semantic-ui-react";
import "./Tasks.css";
export default function Tasks() {
  // const [check, setChecked] = useState(false);
  const [complete] = useState("complete");
  const [btnColor] = useState("orange");
  // const [iconName] = useState("");
  const [open, setOpen] = useState(false);
  const [heading, setHeading] = useState("");
  
  const [todoList, setTodoList] = useState([]);
  const [remove] = useState(false);

  function actionsOnItems(key) {
   
  
    var filteredItems = todoList.filter(function (item) {
      return item.key !== key
    });

    setTodoList(filteredItems);
  }

  // setTimeout(() => {
  //   setDetails({
  //     head: heading,
  //     descrpt: description,
  //   });
  // }, 1000);

 

  const addTask = () => {
    setOpen(true); 
  };

  function addItem(e) {
    let newItem = {
      text: heading,
      key: Date.now(),
    };

    if(heading === ""){
      alert("put a valid task")
    
    } 
    else{
    setTodoList((prevState) => [...prevState, newItem]);
    setHeading("");
    setOpen(false);

    e.preventDefault();
    }
  }
  // const markdone = () => {
  //   setChecked(true);
  //   setCompleted("completed");
  //   setBtnColor("green");
  //   setIconName("check");

  //   setTimeout(() => {
  //     setBtnColor("red");
  //     setIconName("cancel");
  //     setCompleted("delete");
  //   }, 5000);

  //   if (complete.match("delete")) {
  //   }
  // };
  console.log(todoList);
  return (
    <>
    <span style={{color:"black",fontSize:"15px"}}>You have {todoList.length} task to complete to day</span>
      {" "}
      <br />
      <Icon name="add" color="green" size="tiny" circular link />
      <span className="add-btn" onClick={addTask}>
        <b>add task</b>
      </span>
      <br />
      <div className="taskIn  ">
        {open ? (
          <>
            {" "}
            <Segment>
              <Form onSubmit={addItem}>
                <b style={{ color: "black" }}>Subject</b>
                <br />
                <Input
                  onChange={(e) => setHeading(e.target.value)}
                  placeholder="enter task"
                  style={{
                    marginTop:"0.5em",
                    marginBottom:"0.5em"
                  }}
                />
                {" "}
                <br/>
                <Button type="submit" color="green" compact>
                  add
                </Button>
              </Form>
              {/* 
              <br />
              <b style={{ color: "black" }}>Description</b>
              <Input onChange={handleDescription} fluid />
              <br /> */}

              {/* <Button.Group color="teal" compact size="tiny">
                <Button>priority</Button>
                <Dropdown
                  className="button icon"
                  options={options}
                  trigger={<></>}
                />
              </Button.Group> */}
            </Segment>
          </>
        ) : (
          <></>
        )}
      </div>
      <br />
      <div className="tasks">
        
          {" "}
          {todoList.map((item) => {
            return remove ? (
              <></>
            ) : (
              
                <Segment color="red"key={item.key}  >
                  <List>
                    <List.Item>
                      <List.Icon name="marker" />
                      <List.Content>
                        <List.Header>
                        {item.text}
                        </List.Header>
                        {/* <List.Description>{item.description}</List.Description> */}
                        
                        <span
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            marginTop: "5px",
                          }}
                        >
                          
                          <Button
                            color={btnColor}
                            as="a"
                            size="mini"
                            onClick={(e) => actionsOnItems(item.key)}
                          >
                            {/*  <Icon name={iconName} /> */}
                            {complete} 
                          </Button>
                        </span>
                      </List.Content>
                    </List.Item>
                  </List>
                
                </Segment>

                
              
            );
          })}{" "}
       
      </div>
    </>
  );
}
