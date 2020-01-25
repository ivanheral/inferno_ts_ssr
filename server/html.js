// Routes will be rendered into children
export default function html({ children }) {
  return (
    <html>
      <head>
        <title>My Isomorphic Application</title>
      </head>
      <body>
        <div id="root">{children}</div>
        <script src="main.js"></script>
      </body>
  </html>
  );
}