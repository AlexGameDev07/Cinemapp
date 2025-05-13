import customersMdl from "../models/customersMdl.js";

const customerCtrl = {};

//GET
customerCtrl.getCustomers = async (req, res) => {
    try {
        const customers = await customersMdl.find();
        res.status(200).json(customers);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

//PUT
customerCtrl.updateCustomer = async (req, res) => {
    try {
        const updatedCustomer = await customersMdl.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedCustomer) {
            return res.status(404).json({ message: "Customer not found" });
        }
        res.status(200).json(updatedCustomer);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
}

//DELETE
customerCtrl.deleteCustomer = async (req, res) => {
    try {
        const deletedCustomer = await customersMdl.findByIdAndDelete(req.params.id);
        if (!deletedCustomer) {
            return res.status(404).json({ message: "Customer not found" });
        }
        res.status(200).json({ message: "Customer deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export default customerCtrl;