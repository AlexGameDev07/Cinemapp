import employeesMdl from "../models/employeesMdl.js";

const employeeCtrl = {};

//GET
employeeCtrl.getEmployees = async (req, res) => {
    try {
        const employees = await employeesMdl.find();
        res.status(200).json(employees);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

//PUT
employeeCtrl.updateEmployee = async (req, res) => {
    try {
        const updatedEmployee = await employeesMdl.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedEmployee) {
            return res.status(404).json({ message: "Employee not found" });
        }
        res.status(200).json(updatedEmployee);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
}

//DELETE
employeeCtrl.deleteEmployee = async (req, res) => {
    try {
        const deletedEmployee = await employeesMdl.findByIdAndDelete(req.params.id);
        if (!deletedEmployee) {
            return res.status(404).json({ message: "Employee not found" });
        }
        res.status(200).json({ message: "Employee deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export default employeeCtrl;