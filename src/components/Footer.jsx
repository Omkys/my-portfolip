export default function Footer() {
  return (
    <footer className="w-full text-center py-8 mt-12 bg-rose-200 dark:bg-rose-300">
      <p className="text-neutral-600 dark:text-neutral-500 text-lg">
        &copy; {new Date().getFullYear()} Onkar Bobde. All rights reserved.
      </p>
      <p className="text-sm text-neutral-500 mt-2">
        Contact:{' '}
        <a
          href="mailto:bobdeonkar17@gmail.com"
          className="hover:underline text-rose-600 font-semibold"
        >
          bobdeonkar17@gmail.com
        </a>
      </p>
    </footer>
  );
}
