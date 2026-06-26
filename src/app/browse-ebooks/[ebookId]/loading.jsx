export default function Loading() {
  return (
    <div
      className="
max-w-6xl
mx-auto
grid
lg:grid-cols-2
gap-10
animate-pulse
p-10
"
    >
      <div
        className="
bg-gray-200
rounded-xl
aspect-[3/4]
"
      />

      <div
        className="
space-y-5
"
      >
        <div
          className="
h-10
bg-gray-200
rounded
"
        />

        <div
          className="
h-5
bg-gray-200
rounded
w-1/2
"
        />

        <div
          className="
h-40
bg-gray-200
rounded
"
        />
      </div>
    </div>
  );
}
