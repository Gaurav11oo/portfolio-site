import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SkillsComponent } from "../../components/skills/skills.component";

import { SeoService } from "../../service/seo.service";

@Component({
  selector: "app-experience-page",
  standalone: true,
  imports: [CommonModule, SkillsComponent],
  templateUrl: "./skills.html",
  styleUrls: ["../skills/skills.css"],
})
export class ExperienceComponent implements OnInit {
  constructor(private seoService: SeoService) {}

  ngOnInit(): void {
    this.seoService.updateMetaTags({
      title: "Skills – Gaurav Nishad",
      description:
        "Explore Gaurav Nishad's professional experience as a Full-Stack Developer. View detailed work history, technical skills, and career achievements in Angular, .NET, and web development.",
      url: "https://darshanbhuva.vercel.app/experience",
      keywords:
        "Gaurav Nishad Experience, Full-Stack Developer Career, Angular Developer Jobs, .NET Developer Experience, Web Development Skills, Professional Background",
    });
  }
}
