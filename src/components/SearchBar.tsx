import { Input } from "@chakra-ui/react";
import React, { useState } from "react";


export function SearchBar(): JSX.Element {
    return(
        <div>
            <Input placeholder='Type your problem here' />;
        </div>
    );


}