import React from "react";
import {Grid} from "@mui/material";
import {mockData} from "mocks/mockdata";
import {Car} from "components/Car";


export const CarsList: React.FC = () => {
    return <Grid container spacing={2} style={{marginTop: 34}}>
        {mockData.map((item) => (
            <Grid item md={3} key={item.MakeId}>
                <Car car={item} />
            </Grid>
        ))}
    </Grid>
}