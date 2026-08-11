// Estructura inicial de sessions. La lógica de auth se agrega más adelante
export const getSessions = (req, res) => {
  res.status(200).json({ status: "success", message: "sessions endpoint (pendiente de auth)" });
};
