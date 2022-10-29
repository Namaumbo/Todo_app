import React, { useState } from "react";
import {
  Segment,
  List,
  Label,
  Icon,
  Checkbox,
  Button,
  Input,
  Dropdown,
} from "semantic-ui-react";
import "./Tasks.css";
export default function Tasks() {
  const [check, setChecked] = useState(false);
  const [complete, setCompleted] = useState("mark complete");
  const [btnColor, setBtnColor] = useState("orange");
  const [iconName, setIconName] = useState("");
  const [open, setOpen] = useState(false);
  const [heading, setHeading] = useState("");
  const [description, setDescription] = useState("");
  // const [details, setDetails] = useState({ head});
  const [todoList, setTodoList] = useState([]);
  const [remove, setRemove] = useState(false);

  function deleteItem(key) {
    var filteredItems = todoList.filter(function (item) {
      return item.key !== key;
    });

    setTodoList(filteredItems);
  }

  // setTimeout(() => {
  //   setDetails({
  //     head: heading,
  //     descrpt: description,
  //   });
  // }, 1000);

  const doneInp = () => {
    setOpen(false);
    // setTodoList((prev) => [...prev, details]);
  };

  const addTask = () => {
    setOpen(true);
  };

  function addItem(e) {
    let newItem = {
      text: heading,
      key: Date.now(),
    };
    setTodoList((prevState) => [...prevState, newItem]);
    setHeading("");
    setOpen(false);

    e.preventDefault();
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
              <form onSubmit={addItem}>
                <b style={{ color: "black" }}>Subject</b>
                <br />
                <input
                  onChange={(e) => setHeading(e.target.value)}
                  placeholder="enter task"
                ></input>
                <br />
                <Button type="submit" color="green" compact size="tiny">
                  add
                </Button>
              </form>
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
                          <Checkbox checked={check} label={item.text} />{" "}
                        </List.Header>
                        <List.Description>{item.description}</List.Description>
                        <span
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            marginTop: "5px",
                          }}
                        >
                          <Label>
                            <Icon name="cart arrow down"></Icon>marketing
                          </Label>
                          <Button
                            color={btnColor}
                            as="a"
                            size="mini"
                            onClick={(e) => deleteItem(item.key)}
                          >
                            <Icon name={iconName} />
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
