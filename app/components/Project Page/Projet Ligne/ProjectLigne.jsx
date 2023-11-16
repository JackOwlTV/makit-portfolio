"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Projects } from "../../../data/Projects";
import {
  kelson_regular,
  kelson,
  kelson_meduim,
} from "@/app/fonts/kelson/kelson";

import "./ProjectLigne.css";

const ProjectLigne = (props) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <Link
      href={{
        pathname: "/project/[id].js", // the path to your page
        query: { id: props.id }, // the id of the project
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <span className={isHovered ? kelson.className : kelson_meduim.className}>
        {props.name}
      </span>
      <span className={kelson_regular.className}>{props.category}</span>
    </Link>
  );
};

export default ProjectLigne;
