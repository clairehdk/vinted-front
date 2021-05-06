import loading from "../assets/img/loading.svg";

const Loading = () => {
  return (
    <div className="loader">
      <img src={loading} alt="Loading en cours..." />
    </div>
  );
};

export default Loading;
