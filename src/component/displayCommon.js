import React from "react";
import { Listbox,DDL } from "./common/ULcommon";
import Tables from "./common/Tabel";
import Table from "./common/Tablecomp";
const DisplayCommon = () => {

const player = ['sachin','dhoni','kohli'];
const student = ['s1','s2','s3','s4','s5'];

//First table configuration values
const header = ['name','runs','loc'];
const header1 = ['sname','srolno'];
const playerData = [{pname:'sachin',runs:20000,loc: 'Mumai'},
                    {pname:'dhoni',runs:1000,loc: 'Mumai'},
                    {pname:'virat',runs:2000000,loc: 'delhi'},]

const studentData = [{sname:'s1',srolno:1,},{sname:'s2',srolno:2,}];

//second table configuration values
const headerdata = ['pname','location','run'];
const headerdata1 = ['stuName','Id'];
const TableData = [{pname:'sachin',location:'mumbai',run:10000}]
const TableStuentData =  [{stuName:'Dnyaneshwar Jadhav',Id:'#101'}]
  return(
    <>
    <DDL data={student}/>
    <br/>
        <DDL data={player}/>
        <br/>
        <Listbox p={player}/>
        <br/>
        <Listbox p={student}/>
        <br/>
       <Tables header={header} data={playerData} columns={['pname','runs','loc']}/>
       <br/>
       <Tables header={header1} data={studentData} columns={['sname','srolno']}/>
        <br/>

       <Table header={headerdata} TableData={TableData} cols={['pname','location','run']}/>
       <br/>
       <Table header={headerdata1} TableData={TableStuentData} cols={['stuName','Id']}/>
    </>
  )
}
export default DisplayCommon;