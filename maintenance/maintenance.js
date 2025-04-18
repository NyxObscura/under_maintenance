export default function handler(req, res) {
  res.status(500).json({
    status: 500,
    message: "Velyn API is currently under maintenance. Please be patient while we improve our services."
  });
}
