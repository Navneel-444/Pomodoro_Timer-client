import "./Navbar.scss";
import nav from "../../assets/Icons/nav-icon.svg";
import close from "../../assets/Icons/close-icon.svg";
import question from "../../assets/Icons/question-icon.svg";
import settings from "../../assets/Icons/settings-icon.svg";
import task from "../../assets/Icons/task-icon.svg";
import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {

    return (
        <nav className="nav-bar">
            <button className="nav-bar__close"><img src={close} alt="close navigation bar" className="nav-bar__icon" /></button>
            <ul className="nav-bar__list">
                <li>
                    <NavLink className="nav-bar__item" to="/tasks">
                        <img src={task} alt="task list icon" className="nav-bar__icon" />
                        <p className="nav-bar__item-name">Task List</p>
                    </NavLink>
                </li>
                <li>
                    <NavLink className="nav-bar__item" to="/help">
                        <img src={question} alt="task list icon" className="nav-bar__icon" />
                        <p className="nav-bar__item-name">Help</p>
                    </NavLink>
                </li>
                <li>
                    <NavLink className="nav-bar__item" to="/settings">
                        <img src={settings} alt="task list icon" className="nav-bar__icon" />
                        <p className="nav-bar__item-name">Settings</p>
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}