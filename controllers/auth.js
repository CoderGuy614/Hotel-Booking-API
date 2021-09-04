import User from "../models/user";

export const register = async (req, res) => {
  const { name, email, password } = req.body;
  if (!name) return res.status(400).send("Name is required");
  if (!password || password.length < 6)
    return res.status(400).send("Password of mininum 6 characters is required");
  let userExists = await User.findOne({ email }).exec();
  if (userExists)
    return res
      .status(400)
      .send("Account with this email is already registered");

  const user = new User(req.body);
  try {
    await user.save();
    console.log("USER CREATED", user);
    return res.json({ ok: true });
  } catch (error) {
    console.log("CREATE USER FAILED", err);
    return res.status(400).send("Something went wrong, please try again");
  }
};
