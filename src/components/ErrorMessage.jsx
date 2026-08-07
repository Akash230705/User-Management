import "./ErrorMessage.css";

function ErrorMessage({ message, onRetry }) {
  return (
    <div className="error-container">

      <h3>Error</h3>

      <p>{message}</p>

      {onRetry && (
        <button
          onClick={onRetry}
          className="retry-btn"
        >
          Retry
        </button>
      )}

    </div>
  );
}

export default ErrorMessage;