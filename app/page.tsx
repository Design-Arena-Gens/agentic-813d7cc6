'use client';

import { ArrowRightIcon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaqAccordion } from "@/components/FaqAccordion";
import { MetricCard } from "@/components/MetricCard";
import { SectionTitle } from "@/components/SectionTitle";
import { faq, impactMetrics, roadmapSteps } from "@/lib/data";

const heroHighlights = [
  "осознанное лидерство",
  "устойчивые практики здоровья",
  "цифровая поддержка 24/7",
  "сообщество единомышленников"
];

const resourceCards = [
  {
    title: "360° карта благополучия",
    description:
      "Аналитика образа жизни, уровня энергии и карьерных сценариев с рекомендациями по улучшению.",
    link: "#diagnostics"
  },
  {
    title: "Программы роста",
    description:
      "Модули по здоровью, стресс-менеджменту, финансовой осознанности и управлению карьерой.",
    link: "#programs"
  },
  {
    title: "Цифровой наставник",
    description:
      "Личный трекер прогресса, подбор практик, напоминания и регулярная обратная связь.",
    link: "#mentor"
  }
];

export default function Home() {
  return (
    <main>
      <section className="relative overflow-hidden pb-24 pt-28 sm:pt-32">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_#c6f6f4_0%,_transparent_55%)]" />
        <div className="mx-auto flex max-w-6xl flex-col gap-12 px-4 md:flex-row md:items-center md:px-6">
          <motion.div
            className="flex-1 space-y-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
              Баланс успеха и здоровья
            </span>
            <h1 className="font-display text-5xl leading-tight text-neutral sm:text-6xl">
              Успешное и здоровое будущее начинается сегодня
            </h1>
            <p className="max-w-xl text-lg leading-relaxed text-neutral/70">
              Платформа помогает людям и командам создавать устойчивые привычки,
              укреплять здоровье и развивать лидерские качества, не теряя
              жизненной энергии.
            </p>
            <div className="flex flex-wrap gap-3">
              {heroHighlights.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-primary/40 bg-white px-4 py-2 text-sm text-neutral/80 shadow-sm"
                >
                  {item}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                href="#roadmap"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-base font-semibold text-white transition hover:bg-primary/90"
              >
                Стартовать сейчас
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
              <Link
                href="#community"
                className="inline-flex items-center gap-2 rounded-full border border-neutral/10 bg-white/70 px-6 py-3 text-base font-semibold text-neutral transition hover:border-neutral/40"
              >
                Узнать больше
              </Link>
            </div>
          </motion.div>
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <div className="glass-panel relative overflow-hidden border-primary/10 bg-gradient-to-br from-white via-primary/5 to-secondary/60 p-8 sm:p-10">
              <div className="absolute inset-x-6 top-6 h-24 rounded-3xl bg-gradient-to-r from-primary/30 via-secondary/30 to-accent/30 blur-3xl" />
              <div className="relative space-y-6">
                <p className="text-sm font-medium uppercase tracking-[0.35em] text-neutral/60">
                  2024 · Экосистема роста
                </p>
                <h3 className="font-display text-3xl text-neutral">
                  Вдохновляем на осознанные решения
                </h3>
                <ul className="space-y-3 text-neutral/70">
                  <li>• Персональная стратегия развития</li>
                  <li>• Инструменты внедрения привычек</li>
                  <li>• Сообщество поддержки и экспертов</li>
                </ul>
                <div className="rounded-2xl bg-white/70 p-4 text-sm text-neutral/70 shadow-inner">
                  <p className="font-semibold text-neutral">Живой результат:</p>
                  <p>
                    82% участников отмечают рост энергии и концентрации уже через
                    6 недель.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section
        id="impact"
        className="relative mx-auto max-w-6xl px-4 pb-24 md:px-6"
      >
        <SectionTitle
          eyebrow="Цифры"
          title="Проверенное влияние на людей и команды"
          description="Мы объединяем науку, технологии и человеческий опыт. Метрики обновляются в реальном времени и доступны всем участникам."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {impactMetrics.map((metric, index) => (
            <MetricCard
              key={metric.label}
              icon={<span>✳️</span>}
              value={metric.value}
              label={metric.label}
              description={metric.description}
              delay={index * 0.1}
            />
          ))}
        </div>
      </section>

      <section
        id="programs"
        className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-white to-secondary/30 py-24"
      >
        <div className="absolute left-1/2 top-0 h-full w-[120%] -translate-x-1/2 bg-[radial-gradient(circle_at_top,_#1e7c8322_0%,_transparent_65%)]" />
        <div className="relative mx-auto max-w-6xl px-4 md:px-6">
          <SectionTitle
            eyebrow="Программы"
            title="Карта устойчивого развития"
            description="Выбирайте готовые треки или комбинируйте собственную программу под цели команды. Все сценарии адаптируются и масштабируются."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {resourceCards.map((card) => (
              <motion.div
                key={card.title}
                className="glass-panel group h-full p-8"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="font-display text-2xl text-neutral">
                  {card.title}
                </h3>
                <p className="mt-4 text-neutral/70 leading-relaxed">
                  {card.description}
                </p>
                <Link
                  href={card.link}
                  className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary transition group-hover:gap-3"
                >
                  Открыть детали
                  <ArrowRightIcon className="h-4 w-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="roadmap" className="mx-auto max-w-6xl px-4 py-24 md:px-6">
        <SectionTitle
          eyebrow="Путь"
          title="Как мы создаём успешное и здоровое будущее"
          description="Структура программы помогает удерживать фокус и отслеживать прогресс. Каждый этап сопровождается менторством и инструментами самоанализа."
        />
        <div className="mt-12 space-y-6">
          {roadmapSteps.map((step, index) => (
            <motion.div
              key={step.title}
              className="glass-panel relative border-l-4 border-primary/30 p-6 md:p-8"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-primary">
                {step.milestone}
              </span>
              <h3 className="mt-4 font-display text-2xl text-neutral">
                {index + 1}. {step.title}
              </h3>
              <p className="mt-3 text-neutral/70 leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      <section
        id="community"
        className="relative overflow-hidden bg-neutral py-24"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#1e7c83_0%,_transparent_60%)] opacity-60" />
        <div className="relative mx-auto max-w-6xl px-4 md:px-6">
          <SectionTitle
            eyebrow="Сообщество"
            title="Лидеры, эксперты и команды"
            description="Наша платформа собирает людей, готовых действовать. Каждый участник делится знаниями, формирует инициативы и поддерживает других."
            align="left"
          />
          <div className="mt-10 grid gap-8 md:grid-cols-[1.2fr_1fr]">
            <div className="glass-panel border-white/20 bg-white/10 p-8 text-white">
              <h3 className="font-display text-3xl">
                Пространство совместного роста
              </h3>
              <ul className="mt-6 space-y-4 text-base text-white/80">
                <li>• Модерация комьюнити и тематические клубы.</li>
                <li>
                  • Совместные челленджи: цифровой детокс, марафоны здоровья,
                  гибкие рабочие практики.
                </li>
                <li>• Партнёрства с образовательными и wellness-площадками.</li>
              </ul>
              <div className="mt-8 flex flex-wrap gap-3 text-xs uppercase tracking-widest text-white/70">
                <span className="rounded-full border border-white/20 px-4 py-2">
                  wellbeing
                </span>
                <span className="rounded-full border border-white/20 px-4 py-2">
                  лидерство
                </span>
                <span className="rounded-full border border-white/20 px-4 py-2">
                  устойчивость
                </span>
                <span className="rounded-full border border-white/20 px-4 py-2">
                  инновации
                </span>
              </div>
            </div>
            <div className="glass-panel border-white/20 bg-white/80 p-8 text-neutral">
              <h4 className="font-display text-2xl">Академия наставников</h4>
              <p className="mt-4 text-neutral/70 leading-relaxed">
                Специалисты по здоровью, коучингу и карьерному развитию проходят
                отбор и обучение. Наставники используют научный подход, дают
                обратную связь и помогают реализовать задуманное.
              </p>
              <Link
                href="#mentor"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary"
              >
                Подать заявку
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-24 md:px-6">
        <SectionTitle
          eyebrow="Вопросы"
          title="Частые вопросы"
          description="Ответили на ключевые вопросы, чтобы вы могли быстрее принять решение."
        />
        <div className="mt-10">
          <FaqAccordion items={faq} />
        </div>
      </section>

      <section
        id="mentor"
        className="relative mx-auto max-w-6xl px-4 pb-28 md:px-6"
      >
        <div className="glass-panel relative overflow-hidden bg-gradient-to-br from-white via-primary/5 to-secondary/60 p-10 sm:p-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <span className="text-sm uppercase tracking-[0.35em] text-primary">
              Присоединяйтесь
            </span>
            <h3 className="font-display text-4xl text-neutral md:text-5xl">
              Начните строить своё успешное и здоровое будущее
            </h3>
            <p className="max-w-2xl text-lg text-neutral/70 leading-relaxed">
              Оставьте заявку — мы проведём ознакомительную сессию, подберём
              наставника и выстроим план действий. Первые шаги и доступ к
              сообществу вы получите в течение 48 часов.
            </p>
            <form className="grid gap-4 md:grid-cols-2">
              <input
                type="text"
                name="name"
                placeholder="Имя и фамилия"
                className="rounded-xl border border-neutral/20 bg-white px-4 py-3 text-base text-neutral outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/20"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Электронная почта"
                className="rounded-xl border border-neutral/20 bg-white px-4 py-3 text-base text-neutral outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/20"
                required
              />
              <input
                type="text"
                name="goal"
                placeholder="Цель или запрос"
                className="md:col-span-2 rounded-xl border border-neutral/20 bg-white px-4 py-3 text-base text-neutral outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/20"
              />
              <textarea
                name="message"
                placeholder="Чем мы можем помочь?"
                rows={4}
                className="md:col-span-2 rounded-xl border border-neutral/20 bg-white px-4 py-3 text-base text-neutral outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/20"
              />
              <button
                type="submit"
                className="md:col-span-2 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-3 text-base font-semibold text-white transition hover:bg-primary/90"
              >
                Отправить заявку
                <ArrowRightIcon className="h-4 w-4" />
              </button>
            </form>
            <p className="text-sm text-neutral/60">
              Отправляя форму, вы соглашаетесь с политикой конфиденциальности и
              обработкой персональных данных.
            </p>
          </motion.div>
        </div>
      </section>

      <footer className="bg-neutral py-12 text-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 md:flex-row md:items-center md:justify-between md:px-6">
          <div>
            <p className="font-display text-2xl">Будущее в наших руках</p>
            <p className="mt-2 text-sm text-white/70">
              © {new Date().getFullYear()} Успешное и здоровое будущее. Все
              права защищены.
            </p>
          </div>
          <div className="flex gap-6 text-sm text-white/70">
            <Link href="#impact" className="transition hover:text-white">
              Влияние
            </Link>
            <Link href="#programs" className="transition hover:text-white">
              Программы
            </Link>
            <Link href="#roadmap" className="transition hover:text-white">
              Путь
            </Link>
            <Link href="#mentor" className="transition hover:text-white">
              Связаться
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
