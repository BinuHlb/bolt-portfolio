export default function Footer() {
  return (
    <footer className="py-6 border-t">
      <div className="container">
        <p className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Your Name. All rights reserved.
        </p>
      </div>
    </footer>
  );
}