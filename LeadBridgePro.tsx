import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function LeadBridgePro() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      author: "Tokyo High",
      avatar: "https://i.pravatar.cc/40?u=tokyo",
      content: "Here's how we ran our Spirit Week: day themes, games, and results!"
    },
    {
      id: 2,
      author: "Berlin Academy",
      avatar: "https://i.pravatar.cc/40?u=berlin",
      content: "Our leadership summit this year focused on sustainability. Ask me anything!"
    }
  ]);

  const [newPost, setNewPost] = useState("");

  const handlePost = () => {
    if (!newPost.trim()) return;
    const post = {
      id: posts.length + 1,
      author: "You",
      avatar: "https://i.pravatar.cc/40?u=you",
      content: newPost.trim()
    };
    setPosts([post, ...posts]);
    setNewPost("");
  };

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-6">
      <div className="text-center space-y-2">
        <h1 className="text-5xl font-bold tracking-tight">LeadBridge</h1>
        <p className="text-muted-foreground text-lg">Lead Beyond Borders — A Global Network for Student Leaders</p>
      </div>

      <Tabs defaultValue="forum" className="mt-8">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="forum">Forum</TabsTrigger>
          <TabsTrigger value="calendar">Calendar</TabsTrigger>
          <TabsTrigger value="resources">Resources</TabsTrigger>
        </TabsList>

        <TabsContent value="forum">
          <Card className="mt-4">
            <CardContent className="p-6 space-y-4">
              <Textarea
                placeholder="Share your leadership insight, event success, or question..."
                value={newPost}
                onChange={(e) => setNewPost(e.target.value)}
              />
              <div className="text-right">
                <Button onClick={handlePost}>Post</Button>
              </div>
              <ScrollArea className="max-h-96 space-y-4">
                {posts.map((post) => (
                  <div key={post.id} className="flex gap-4 p-4 border rounded-2xl shadow-sm bg-white">
                    <Avatar>
                      <AvatarImage src={post.avatar} alt={post.author} />
                      <AvatarFallback>{post.author.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold">{post.author}</p>
                      <p className="text-sm text-muted-foreground mt-1">{post.content}</p>
                    </div>
                  </div>
                ))}
              </ScrollArea>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="calendar">
          <Card className="mt-4">
            <CardContent className="p-6">
              <Calendar mode="single" selected={new Date()} onSelect={() => {}} />
              <p className="mt-4 text-sm text-muted-foreground">Example: Global Spirit Week — March 15</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="resources">
          <Card className="mt-4">
            <CardContent className="p-6 space-y-4">
              <Input type="file" />
              <p className="text-sm text-muted-foreground">Upload posters, checklists, or templates</p>
              <ul className="list-disc pl-5">
                <li><a href="#" className="underline">Homecoming Planning Kit</a></li>
                <li><a href="#" className="underline">Peer Mentorship Template</a></li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
