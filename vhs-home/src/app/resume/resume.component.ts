import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-resume",
  templateUrl: "./resume.component.html",
  styleUrls: ["./resume.component.scss"],
})
export class ResumeComponent implements OnInit {
  mainItems = [
    "Angular 2+",
    "Java/TypeScript",
    "HTML/CSS(Obviously)",
    "C#",
    "MongoDB",
  ];

  items = [
    "SQL",
    "Vue.js",
    "React.js",
    "Python",
    "Node.js",
    "GraphQL",
    "MEAN Stack",
    "Functional Programming"
  ];
  constructor() {}

  ngOnInit() {}
}
