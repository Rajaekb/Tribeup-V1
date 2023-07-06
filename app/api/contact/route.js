export default function handler(req, res) {
  if (req.method === "POST") {
    // Handle the POST request
    console.log(req.body);
    // Access request data using req.body
    // Perform any necessary validation or processing

    // Example response
    res.status(200).json({ message: "Form submitted successfully" });
  }
}
