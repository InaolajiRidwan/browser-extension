import { useState } from "react";
import { data } from "./App";
import { Hero } from "./Hero";
import { Tabs } from "./Tabs";

export function Main() {
  const [currentFilter, setCurrentFilter] = useState("all");
  const [extensions, setExtensions] = useState(data);

  const filteredData = extensions.filter((item) => {
    if (currentFilter === "all") return true;
    return currentFilter === "active" ? item.isActive : !item.isActive;
  });

  return (
    <div>
      <Hero setCurrentFilter={setCurrentFilter} currentFilter={currentFilter} />
      <Tabs data={filteredData} setExtensions={setExtensions} />
    </div>
  );
}
