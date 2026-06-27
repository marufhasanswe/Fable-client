import { Card } from "@heroui/react";

export default function StatCard({
  title,
  value,
  description,
  icon: Icon,
  iconBg,
  iconColor,
  footerIcon: FooterIcon,
  footerColor,
}) {
  return (
    <Card className="rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <Card.Header className="flex flex-row items-start justify-between px-4 pt-4 pb-2">
        <Card.Title className="text-sm font-semibold uppercase tracking-[0.18em] text-gray-500">
          {title}
        </Card.Title>

        <div
          className={`flex h-11 w-11 items-center justify-center rounded-xl ${iconBg}`}
        >
          <Icon className={`h-5 w-5 ${iconColor}`} />
        </div>
      </Card.Header>

      <Card.Content className="px-4">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900">
          {value}
        </h2>
      </Card.Content>

      <Card.Footer className="px-4 pt-0">
        <div
          className={`flex items-center gap-1 text-sm ${
            footerColor || "text-gray-500"
          }`}
        >
          {FooterIcon && <FooterIcon className="h-3.5 w-3.5" />}

          <span>{description}</span>
        </div>
      </Card.Footer>
    </Card>
  );
}
