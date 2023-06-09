import { useRouteError } from "react-router-dom";

export default function Error() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>404 </h1>
      <p>Sorry, an unexpected error has occurred.</p>
    </div>
  );
}