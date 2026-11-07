import { Chip } from '@/components/ui/Chip';
import { Container } from '@/components/ui/Container';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { TechIcon } from '@/components/ui/TechIcon';
import { type SkillGroup } from '@/content';

import styles from './Skills.module.scss';

type Props = {
  title: string;
  groups: SkillGroup[];
};

export function Skills({ title, groups }: Props) {
  return (
    <Container as="section" id="skills" className={styles.section} aria-labelledby="skills-title">
      <SectionTitle id="skills-title">{title}</SectionTitle>
      <div className={styles.groups}>
        {groups.map((group) => (
          <div key={group.name} className={styles.group}>
            <h3 className={styles.name}>
              {group.name} <span className={styles.parens}>()</span>
            </h3>
            <ul className={styles.list}>
              {group.items.map((skill) => (
                <Chip
                  key={skill.name}
                  variant="skill"
                  icon={<TechIcon name={skill.name} mark={skill.mark} />}
                >
                  {skill.name}
                </Chip>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Container>
  );
}
