import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { movieState } from "../movieState";

const MoiveDetail = () => {
    const history = useHistory();
    console.log(movieState);

    return (
        <>
            <h1>Movie Section</h1>
        </>
    )
}

const Details = styled.div``;
const HeadLine = styled.div``;

export default MoiveDetail;