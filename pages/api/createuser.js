import { usersRepo } from '../../helpers/users-repo';

export default function handler(req, res) {
    if(req.method === "POST")
    {
        try {
            debugger;
            usersRepo.create(req.body);
            return res.status(200).json({ message: req.body });
        } catch (error) {
            return res.status(400).json({ message: "testing error" });
        }
    }
}
