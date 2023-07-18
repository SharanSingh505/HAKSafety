import React from "react";
import new_logo from "./logo.svg";
import "./App.css";
import { Center, Container, Divider, Heading, ListItem, Tab, TabList, TabPanel, TabPanels, Tabs, UnorderedList } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { SearchBar } from "./components/SearchBar";


function App() {
    return (
        <div className="App">
            <div style={{"backgroundColor": "#bee3f8"}}>
                <Heading pt={8} pb={1} bg="#bee3f8">
                    <Center mb={3}>
                        <img src="old-logo.png" width="70" alt="Hackathon Logo"/>
                    </Center>
                    <p>Mindset Miners</p>
                </Heading>
                <Container pb={5} bg="#bee3f8">Search for a .</Container>
            </div>
            <Divider orientation='horizontal' borderWidth={3} borderColor = "#2055A1"/>
            <SearchBar></SearchBar>
            
            <Divider orientation='horizontal' borderWidth={3}  borderColor = "#2055A1"/>
            <div style={{"backgroundColor": "#bee3f8", "padding": "30px 0 40px 0"}}>                

                <br/>
                <b>Mindset Minsers 2023</b><br/>
                <div>DS/AI Hackathon</div><br/>
                <b>Team Members</b><br/>
                Hasan Baker, Sakhee Desai, Moath Erqsous, Abhishek Karwankar, Akash Parmar, Sharanjit Singh

            </div>
        </div>
    );
}

export default App;
