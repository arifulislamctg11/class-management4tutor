import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const Classes = async () => {
  const data = await fetch("http://localhost:3000/api/dashboard/class");
  const posts = await data.json();
  console.log(posts);

  return (
    <Table>
      <TableCaption>A list of your Classes.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Title</TableHead>
          <TableHead>Description</TableHead>
          <TableHead>Schedule</TableHead>
          <TableHead>Students</TableHead>
          <TableHead className="text-right">Materials</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {posts.data.map((res) => (
          <TableRow key={res._id}>
            <TableCell className="font-medium">{res.title}</TableCell>
            <TableCell className="">{res.description}</TableCell>
            <TableCell>
              {res.schedule.map((item, index) => (
                <p key={index}>{item}</p>
              ))}
            </TableCell>
            <TableCell></TableCell>
            <TableCell className="text-right"></TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
export default Classes;
