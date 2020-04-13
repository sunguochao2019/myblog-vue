## 用户信息

// 获取所有用户信息
http://localhost:3000/users

// 获取 id 为 1 的用户信息
http://localhost:3000/users/1

// 获取年龄 30 及以上的
http://localhost:3000/users?age_gte=30

// 获取年龄在 30 到 40 之间
http://localhost:3000/users?age_gte=30&age_lte=40

// 搜索用户信息
http://localhost:3000/users?q=h

## 公司信息

// 获取公司的所有信息
http://localhost:3000/companies

// 获取单个公司的信息
http://localhost:3000/companies/1

// 获取所有公司 id 为 3 的用户
http://localhost:3000/companies/3/users

// 根据公司名字获取信息
http://localhost:3000/companies?name=Microsoft

// 根据多个名字获取公司信息
http://localhost:3000/companies?name=Microsoft&name=Apple

// 获取一页中只有两条数据
http://localhost:3000/companies?_page=1&_limit=2

// 升序排序 asc 升序 desc 降序
http://localhost:3000/companies?_sort=name&_order=asc

## 博客信息

// 获取所有博客信息
http://localhost:3000/blogs

// 获取单个博客信息
http://localhost:3000/blogs/1

// 根据博客名字获取信息
http://localhost:3000/blogs?title=vue

// 根据多个名字获取博客信息
http://localhost:3000/blogs?title=vue&id=1

// 获取一页中只有两条数据
http://localhost:3000/blogs?_page=1&_limit=2

// 升序排序博客 asc 升序 desc 降序
http://localhost:3000/blogs?_sort=id&_order=asc

// 搜索博客信息
http://localhost:3000/blogs?q=h
