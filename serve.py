import os
import sys
import mimetypes
from http.server import ThreadingHTTPServer, SimpleHTTPRequestHandler

PORT = 8080
DIRECTORY = r"c:\Users\prans\OneDrive\Desktop\New folder\AARYA'S PORTFOLIO"

mimetypes.add_type('image/webp', '.webp')
mimetypes.add_type('video/mp4', '.mp4')
mimetypes.add_type('text/javascript', '.js')
mimetypes.add_type('text/css', '.css')

class RangeRequestHandler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

    def end_headers(self):
        self.send_header('Accept-Ranges', 'bytes')
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Cache-Control', 'no-cache')
        super().end_headers()

    def do_GET(self):
        # Handle HTTP Range requests for seamless video playback & scrubbing
        range_header = self.headers.get('Range')
        if not range_header or '=' not in range_header:
            return super().do_GET()

        path = self.translate_path(self.path)
        if not os.path.isfile(path):
            return super().do_GET()

        ctype = self.guess_type(path)
        file_size = os.path.getsize(path)

        try:
            range_val = range_header.split('=')[1].strip()
            start_str, end_str = range_val.split('-')
            start = int(start_str) if start_str else 0
            end = int(end_str) if end_str else file_size - 1
            if start >= file_size or end >= file_size or start > end:
                self.send_error(416, "Requested Range Not Satisfiable")
                return

            length = end - start + 1
            self.send_response(206)
            self.send_header('Content-Type', ctype)
            self.send_header('Content-Range', f'bytes {start}-{end}/{file_size}')
            self.send_header('Content-Length', str(length))
            self.end_headers()

            with open(path, 'rb') as f:
                f.seek(start)
                remaining = length
                buf_size = 64 * 1024
                while remaining > 0:
                    chunk = f.read(min(remaining, buf_size))
                    if not chunk:
                        break
                    self.wfile.write(chunk)
                    remaining -= len(chunk)
        except (ConnectionResetError, ConnectionAbortedError, BrokenPipeError):
            # Normal browser behavior when closing video stream or seeking
            pass
        except Exception as e:
            pass

    def do_HEAD(self):
        return super().do_HEAD()

    def log_message(self, format, *args):
        # Cleaner console logs without spamming every webp frame
        msg = format % args
        if '200 -' in msg and ('frame_' in msg or '.mp4' in msg):
            return
        sys.stderr.write(f"[{self.log_date_time_string()}] {msg}\n")

if __name__ == '__main__':
    server = ThreadingHTTPServer(('0.0.0.0', PORT), RangeRequestHandler)
    print(f"Serving '{DIRECTORY}' on http://localhost:{PORT} (Multi-threaded with Range support)")
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print("\nServer shutting down.")
        server.server_close()
