const GridRow = (props: { title: String; value: String | Number }) => {
  return (
    <div className="flex border-b justify-between">
      <div className="text-base font-normal">{props.title}</div>
      <div className="font-bold">{props.value}</div>
    </div>
  );
};

export default GridRow;
