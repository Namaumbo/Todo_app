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
  Rating,
} from "semantic-ui-react";
import "./Tasks.css";
export default function Tasks() {
  const options = [
  { key: 'edit',  text: <Rating size="mini" maxRating={4} color/>, value:"5"  },
  { key: 'delete', text: <Rating size="mini" maxRating={4} color/>, value: 'delete' },
  { key: 'hide',  text: <Rating size="mini" maxRating={4} color/>, value: 'hide' },
]

  const [check, setChecked] = useState(false);
  const [complete, setCompleted] = useState(" mark complete");
  const [btnColor, setBtnColor] = useState("orange");
  const [iconName, setIconName] = useState("");
  const [open, setOpen] = useState(false);
 

  const doneInp = () => {
    setOpen(false);
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
              <Input fluid />
              <br />
              <Input fluid />
              <br />
              <Button color="green" compact size="tiny" onClick={doneInp}>
                Done
              </Button>
              <Button.Group color="teal" compact size="tiny">
                <Button>priority</Button>
                <Dropdown
                  className="button icon"
                  floating
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
        <Segment color="red">
          <List>
            <List.Item>
              <List.Icon name="marker" />
              <List.Content>
                <List.Header>
                  <Checkbox checked={check} label="Design Sign up Flow" />{" "}
                </List.Header>
                <List.Description>
                  By the time expression is finished then sign up flow must be
                  finish
                </List.Description>
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
                  <Label color={btnColor} as="a" size="tiny" onClick={markdone}>
                    <Icon name={iconName} />
                    {complete}
                  </Label>
                </span>
              </List.Content>
            </List.Item>
          </List>
        </Segment>
      </div>
    </>
  );
}
