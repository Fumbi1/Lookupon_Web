"use client"
import { useState } from 'react';
import  './settings.css';
import Profile from '@/components/profile/page';
import ChangePassword from '@/components/password/page';
import EmailNotification from '@/components/emailNotif/page';

const AccountSettings = () => {

    const [menu, setMenu] = useState("profile");

  return (
    <div>
        <div className="settings-flex_bar">
            <div className='settings_menu'>
                <p className='settings_title'>Account Settings</p>

                <div>
                    <div className={menu === "profile" ? 'selected_menu' : 'unselected_menu'} onClick={() => {
                        setMenu((prev) => prev = "profile")
                    }}>
                        <p>Profile</p>
                    </div>
                    <div className={menu === "password" ? 'selected_menu' : 'unselected_menu'} onClick={() => {
                        setMenu((prev) => prev = "password")
                    }}>
                        <p>Password</p>
                    </div>
                    <div className={menu === "email notifications" ? 'selected_menu' : 'unselected_menu'} onClick={() => {
                        setMenu((prev) => prev = "email notifications")
                    }}>
                        <p>Email Notifications</p>
                    </div>
                </div>
            </div>

            <div className='selected_menu_display'>
                {menu === "profile" && <Profile />}
                {menu === "password" && <ChangePassword />}
                {menu === "email notifications" && <EmailNotification />}
            </div>
        </div>
    </div>
  );
};
export default AccountSettings;
