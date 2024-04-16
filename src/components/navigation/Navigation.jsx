import React from "react";
import { Routes, Route } from "react-router-dom";
import {Create} from "../../pages/create/Create";
import {Batch} from "../../pages/batch/Batch";
import {Design} from "../../pages/design/Design";
import {Tamplates} from "../../pages/tamplates/Tamplates";




export const Navigation = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Create/>} />
        <Route path="/batch" element={<Batch />} />
        <Route path="/design" element={<Design />} />
        <Route path="/tamplates" element={<Tamplates/>} />
      </Routes>
    </div>
  );
};
