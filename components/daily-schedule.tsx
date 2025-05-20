import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export function DailySchedule() {
  const scheduleItems = [
    { time: "5:30 am", activity: "Aditya Hrudayam chanting" },
    { time: "6:00 am", activity: "Bhagavadgita Paarayanam" },
    { time: "6:50 am", activity: "Offering Teertham, Prasaadam at Bhagavad Gita Statue" },
    { time: "7:00 am", activity: "Breakfast" },
    { time: "8:00 am", activity: "Lalitha Sahasranama Paarayanam" },
    { time: "9:00 am", activity: "Vishnu Sahasranama Paarayanam" },
    { time: "10am to 12 pm", activity: "Meditation at Mahavatar Babaji Meditation Hall (Complete Silent)" },
    { time: "12pm to 1pm", activity: "Lunch" },
    { time: "4pm", activity: "Offering milk (or) Tea" },
    { time: "4:30pm to 5:30pm", activity: "Satakas paarayanam/ Bhajans/ Sankeerthanalu/ Cultural Programmes" },
    { time: "5:30pm to 6:00pm", activity: "Yoga & Pranayamam" },
    { time: "6:00pm to 7:00pm", activity: "Meditation (Complete Silent)" },
    { time: "7:00pm to 7:30pm", activity: "Message by Gurus (Satsang)" },
    { time: "7:30pm", activity: "Dinner" },
  ]

  return (
    <Card className="border-amber-200">
      <CardHeader className="bg-amber-800 text-white">
        <CardTitle className="text-center">Daily Routine</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-1/3">Time</TableHead>
              <TableHead>Activity</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {scheduleItems.map((item, index) => (
              <TableRow key={index} className={index % 2 === 0 ? "bg-amber-50" : ""}>
                <TableCell className="font-medium">{item.time}</TableCell>
                <TableCell>{item.activity}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <div className="p-4 text-center text-sm text-gray-700">
          DEVOTEES Should Join the Queue few minutes Before the Scheduled Time
        </div>
      </CardContent>
    </Card>
  )
}
