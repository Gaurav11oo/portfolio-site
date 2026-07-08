import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { ExperienceComponent as ExperienceContentComponent } from '../../components/experience/experience.component';
import { EducationComponent as EducationContentComponent } from '../../components/education/education.component';
// import { SkillsComponent } from '../../components/skills/skills.component';

import { SeoService } from '../../service/seo.service';


@Component({
  selector: 'app-education-page',
  standalone: true,
  imports: [CommonModule, EducationContentComponent],
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  constructor(private seoService: SeoService) { }

  ngOnInit(): void {
    this.seoService.updateMetaTags({
      title: 'Education – Gaurav Nishad',
      description: 'Explore Gaurav Nishad\'s professional experience as a Full-Stack Developer. View detailed work history, technical skills, and career achievements in Angular, .NET, and web development.',
      url: 'https://darshanbhuva.vercel.app/education',
      keywords: 'Gaurav Nishad Experience, Full-Stack Developer Career, Angular Developer Jobs, .NET Developer Experience, Web Development Skills, Professional Background'
    });
  }
}
