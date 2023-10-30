import Computer from "@/components/GraphicSample/Computer";

const Page = (props: any) => {
  let show = <p>{JSON.stringify(props)}</p>;

  if (props.params.g_id === "1") {
    show = <Computer />;
  }

  return (
    <div>
      <p>그래픽 상세 페이지</p>
      {show}
    </div>
  );
};

export default Page;
