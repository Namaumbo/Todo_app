import React from "react";
import {Segment} from 'semantic-ui-react'

export default function Task (){
    return<>
    <Segment color="red">
 <List>
   <List.Item>
     <List.Icon name="marker" />
     <List.Content>
       <List.Header>
         <Checkbox checked={check} label={item.heading} />{" "}
       </List.Header>
       <List.Description>
         {item.description}
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
    </>
}