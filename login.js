while (1)
{
	tk = prompt("Tên Đăng Nhập");
	mk = prompt("Mật Khẩu");
	if (tk == "admin" && mk == "admin") break;
	alert("Sai tên đăng nhập hoặc mật khẩu");
}