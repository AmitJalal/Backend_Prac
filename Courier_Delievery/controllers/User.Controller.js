const User = require('../models/UserModel');

// ================ test ==================
// exports.getUser = async (req, res) => {
//   try {
//     await res.json({
//       success: true,
//       msg: 'User Controller is working',
//     });
//   } catch (error) {
//     res.status(500).json({
//       error,
//       msg: 'Not Woring!!',
//     });
//     console.log(error);
//   }
// };

//============ Get User ==========
exports.getUser = async (req, res) => {
  try {
    console.log(User.find({}));
    const user = await User.find({});
    res.status(200).json({
      msg: `Currently you have ${user.length} users`,
    });
  } catch (error) {
    res.status(500).json({ msg: 'Internal Error', error });
  }
};

//============ Create User ==========
exports.createNewUser = async (req, res) => {
  console.log(req.params);
  try {
    const user = await User.create(req.body);
    res.status(200).json({
      msg: 'user created successfully',
      user: user,
    });
  } catch (error) {
    res.status(500).json({
      msg: 'Internal Error',
      error,
    });
  }
};

//============ Edit User ==========
exports.updateUser = async (req, res) => {
  try {
    console.log(req.params);
    const user = await User.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({
      msg: 'User updated successfully',
      user,
    });
  } catch (error) {
    res.status(500).json({
      msg: 'Internal Error',
      error,
    });
  }
};

//============ Delete User ==========
exports.deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) return res.status(404).json({ msg: 'Not Found!!' });
    res.status(200).json({
      msg: `${user.username} deleted successfully`,
      user,
    });
  } catch (error) {
    res.status(500).json({
      msg: 'Internal Error',
      error,
    });
  }
};
