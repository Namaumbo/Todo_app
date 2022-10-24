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
  const options = [
    { key: "high", text: "high", value: "3" },
    { key: "delete", text: "medium", value: "2" },
    { key: "hide", text: "low", value: "1" },
  ];

  const [check, setChecked] = useState(false);
  const [complete, setCompleted] = useState(" mark complete");
  const [btnColor, setBtnColor] = useState("orange");
  const [iconName, setIconName] = useState("");
  const [open, setOpen] = useState(false);
  const [heading, setHeading] = useState("");
  const [description, setDescription] = useState("");

  const [details, setDetails] = useState({ head: "", descrpt: "" });
  const [todoList, setTodoList] = useState([]);

  const handleChange = (e) => {
    setHeading(e.target.value);
  };

  const handleDescription = (e) => {
    setDescription(e.target.value);
  };
  setTimeout(() => {
    setDetails({
      head: heading,
      descrpt: description,
    });
   
  }, 1000);
  const doneInp = () => {
    setOpen(false);
    setTodoList((prev) => [...prev, details]);
  };
  const addTask = () => {
    setOpen(true);
  };
  const markdone = () => {
    setChecked(true);
    setCompleted("completed");
    setBtnColor("green");
    setIconName("check");

    setTimeout(() => {
      setBtnColor("red");
      setIconName("cancel");
      setCompleted("delete");
    }, 5000);
  };
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
              <b style={{ color: "black" }}>Subject</b>
              <Input onChange={handleChange} fluid />
              <br />
              <b style={{ color: "black" }}>Description</b>
              <Input onChange={handleDescription} fluid />
              <br />
              <Button color="green" compact size="tiny" onClick={doneInp}>
                Done
              </Button>
              <Button.Group color="teal" compact size="tiny">
                <Button>priority</Button>
                <Dropdown
                  className="button icon"
                  options={options}
                  trigger={<></>}
                />
              </Button.Group>
            </Segment>
          </>
        ) : (
          <></>
        )}
      </div>
      <br />
      <div className="tasks">
        
        {todoList.map((item) => {
          return (
            <div>
              <Segment color="red"  key={item.head} >
                <List>
                  <List.Item>
                    <List.Icon name="marker" />
                    <List.Content >
                      <List.Header>
                        <Checkbox checked={check} label={item.head} />{" "}
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
                        <Label
                          color={btnColor}
                          as="a"
                          size="tiny"
                          onClick={markdone}
                        >
                          <Icon name={iconName} />
                          {complete}
                        </Label>
                      </span>
                    </List.Content>
                  </List.Item>
                </List>
              </Segment>
            </div>
          );
        })}
      </div>
    </>
  );
}
