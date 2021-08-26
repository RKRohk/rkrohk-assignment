interface ProgressBarProps {
  progress: number;
}
const ProgressBar: React.FC<ProgressBarProps> = (props) => {
  return (
    <div>
      <div className="w-52 bg-gray-500 h-1.5 inline-block">
        <div
          className="bg-green-progress h-1.5 "
          style={{ width: `${props.progress}%` }}
        ></div>
      </div>{" "}
      <span className="text-base text-green-progress">
        {props.progress} % funded
      </span>
    </div>
  );
};

export default ProgressBar;
