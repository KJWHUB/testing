import BasicCard from "@/components/Card/BasicCard";
import BasicDialog from "@/components/Dialog/BasicDialog";

export default function BoardWrite() {
  return (
    <main className="p-5">
      <BasicCard>
        <div className="flex flex-row-reverse mt-8">
          <BasicDialog></BasicDialog>
        </div>
      </BasicCard>
    </main>
  );
}
