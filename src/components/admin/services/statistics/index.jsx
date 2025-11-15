"use client";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Label } from "@/components/ui/label";
import Heatmap from "./heatmap";
import { AGES, DIETS, GENDERS, SHIRTS } from "@/data/form/information";
import { api } from "@/utils/api";
import { STATUSES } from "@/data/statuses";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import EventList from "./eventlist";

const Statistics = () => {
  const { data } = useQuery({
    queryKey: ["/admin/statistics"],
    queryFn: async () => api({ url: "/api/statistics", method: "GET" }),
  });

  const { data: events } = useQuery({
    queryKey: ["/admin/events"],
    queryFn: async () => api({ url: "/api/events", method: "GET" }),
  });

  const [value, setValue] = useState("Accepted");
  const [scope, setScope] = useState("form");

  const roles = [
    "participants",
    "judges",
    "volunteers",
    "mentors",
    "admins",
    "committees",
    "sponsors",
    "panelists",
  ];

  const orders = {
    shirt: SHIRTS,
    diet: DIETS,
    age: AGES,
    gender: GENDERS,
  };

  const mappings = {
    Pending: 0,
    Accepted: 1,
    Rejected: 2,
  };

  const heatmaps = Object.keys(orders).map((label) => ({
    key: label,
    labels: orders[label],
    values: Object.keys(STATUSES).map((status) =>
      roles.map((key) => (data ? data[label][key][status] : [])),
    ),
  }));

  return (
    <div className="flex h-full flex-col py-4 font-poppins">
      <div className="flex flex-row items-center pl-4">
        <Label className="pb-2 pr-4 text-2xl font-bold text-white">
          Statistics
        </Label>
        <div className="mb-2 flex items-center gap-4">
          <ToggleGroup
            type="single"
            value={scope}
            onValueChange={(val) => {
              if (val) setScope(val);
            }}
          >
            <ToggleGroupItem value="form" className="text-white">
              Form
            </ToggleGroupItem>
            <span className="text-white">|</span>
            <ToggleGroupItem value="event" className="text-white">
              Event
            </ToggleGroupItem>
          </ToggleGroup>
        </div>
      </div>
      <div className="mb-4 h-2 w-full border-[1px] border-white bg-white" />
      {scope === "form" ? (
        <>
          <div className="flex h-full items-start">
            <ToggleGroup
              type="single"
              value={value}
              onValueChange={(value) => {
                if (value) setValue(value);
              }}
            >
              <Label>Filter: </Label>
              {Object.keys(mappings).map((value, index) => (
                <ToggleGroupItem value={value} key={index}>
                  {value}
                </ToggleGroupItem>
              ))}
            </ToggleGroup>
          </div>

          {heatmaps.map(({ key, values, labels }) => (
            <>
              <Label className="pr-5 text-xl font-medium capitalize">
                {key}
              </Label>
              <Heatmap
                key={key}
                label={value}
                data={
                  key !== "age"
                    ? values[mappings[value]]
                    : values[mappings[value]].filter(
                        (unused, i) => roles[i] !== "judges",
                      )
                }
                xLabels={labels}
                yLabels={roles.filter(
                  (role) => !(key === "age" && role === "judges"),
                )}
              />
            </>
          ))}
        </>
      ) : (
        <>
          <div className="w-full">
            <Label className="pr-5 text-xl font-medium text-white">
              Events
            </Label>
            <EventList events={events} />
          </div>
        </>
      )}
    </div>
  );
};

export default Statistics;
