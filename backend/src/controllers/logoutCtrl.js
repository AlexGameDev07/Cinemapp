const logoutCtrl = {}

logoutCtrl.logout = (req, res) => {
    try {
        res.clearCookie("authToken");
        return res.status(200).json({ msg: "Logout successful" });
    } catch (error) {
        return res.status(500).json({ msg: "Error logging out", error: error.message });
    }
}

export default logoutCtrl;