import { DatabaseClassEntry } from "../types/database";

export const DATABASE_CLASS_ENTRIES: DatabaseClassEntry[] = [
  {
    id: 1,
    week: 1,
    date: "2024-03-04",
    topic: "데이터베이스 기초",
    title: "SQL 설계하기",
    summary: "데이터베이스의 기본 개념과 SQL 쿼리 작성 기초",
    keywords: ["RDBMS", "SQL", "SELECT", "데이터베이스 설계"],
    content: `# SQL 설계

# 1. DDL

## 가. 테이블 생성: CREATE TABLE

1. **문법**:
    
    \`\`\`sql
    CREATE TABLE 테이블명 (
    	속성명 데이터타입 [NOT NULL] [DEFAULT 기본값],
    	PRIMARY KEY (속성명),
    	FOREIGN KEY (속성명) REFERENCES 참조테이블(속성명)
    	ON DELETE 옵션 ON UPDATE 옵션
    );
    \`\`\`
    
2. **질의문**:
    
    고객(Customer), 제품(Product), 주문(Orders) 테이블을 생성하시오.
    
3. **SQL문**:
    
    \`\`\`sql
    CREATE TABLE customer (
    	c_id VARCHAR(20) NOT NULL,
    	c_name VARCHAR(50),
    	age INT,
    	grade VARCHAR(10),
    	job VARCHAR(50),
    	points INT,
    	PRIMARY KEY(c_id)
    );
    
    CREATE TABLE product (
    	p_id VARCHAR(10) NOT NULL,
    	p_name VARCHAR(50),
    	stock INT,
    	price INT,
    	manufacturer VARCHAR(50),
    	PRIMARY KEY(p_id)
    );
    
    CREATE TABLE orders (
    	o_id VARCHAR(10) NOT NULL,
    	customer VARCHAR(20),
    	product VARCHAR(10),
    	quantity INT,
    	destination VARCHAR(100),
    	order_date DATE,
    	PRIMARY KEY (o_id),
    	FOREIGN KEY (customer) REFERENCES customer(c_id)
    	ON DELETE CASCADE ON UPDATE CASCADE,
    	FOREIGN KEY (product) REFERENCES product(p_id)
    	ON DELETE SET NULL ON UPDATE SET NULL
    );
    \`\`\`
    
4. **실행 결과**:
- \`customer\`, \`product\`, \`orders\` 테이블 생성 완료.

---

## 나. 테이블 속성 추가: ALTER TABLE ... ADD

1. **문법**:
    
    \`\`\`sql
    ALTER TABLE 테이블명 ADD 속성명 데이터타입 [NOT NULL] [DEFAULT 기본값];
    \`\`\`
    
2. **질의문**:
    
    \`customer\` 테이블에 \`address\`(VARCHAR(100)) 속성을 추가하시오.
    
3. **SQL문**:
    
    \`\`\`sql
    ALTER TABLE customer ADD address VARCHAR(100);
    \`\`\`
    
4. **실행 결과**:
- \`customer\` 테이블에 \`address\` 속성 추가 완료.

---

## 다. 테이블 속성 삭제: ALTER TABLE ... DROP COLUMN

1. **문법**:
    
    \`\`\`sql
    ALTER TABLE 테이블명 DROP COLUMN 속성명;
    \`\`\`
    
2. **질의문**:
    
    \`customer\` 테이블에서 \`address\` 속성을 삭제하시오.
    
3. **SQL문**:
    
    \`\`\`sql
    ALTER TABLE customer DROP COLUMN address;
    \`\`\`
    
4. **실행 결과**:
- \`customer\` 테이블에서 \`address\` 속성 삭제 완료.

---

## 라. 테이블 삭제: DROP TABLE

1. **문법**:
    
    \`\`\`sql
    DROP TABLE 테이블명;
    \`\`\`
    
2. **질의문**:
    
    \`orders\`, \`product\`, \`customer\` 테이블을 삭제하시오.
    
3. **SQL문**:
    
    \`\`\`sql
    DROP TABLE orders;
    DROP TABLE product;
    DROP TABLE customer;
    \`\`\`
    
4. **실행 결과**:
- \`orders\`, \`product\`, \`customer\` 테이블 삭제 완료.

# 2. DML

### 가. 테이블 데이터 삽입

1. **문법**:
    
    INSERT INTO 테이블명 (속성1, 속성2, …) VALUES (값1, 값2, …);
    
2. **질의문**:
    
    고객 테이블에 새로운 고객 데이터를 삽입하시오.
    
3. **SQL문**
INSERT INTO customer (c_id, c_name, age, grade, job, points)
VALUES (‘C002’, ‘현우’, 25, ‘B’, ‘디자이너’, 300);
4. **실행 결과**:
- \`C002\` 고객 데이터가 삽입됨.

---

### 나. 전체 데이터 검색

1. **문법**:
    
    SELECT * FROM 테이블명;
    
2. **질의문**:
    
    고객 테이블의 모든 데이터를 검색하시오.
    
3. **SQL문**:
    
    SELECT * FROM customer
    
4. **실행 결과**:
    
    
    | c_id | c_name | age | grade | job | points |
    | --- | --- | --- | --- | --- | --- |
    | C001 | Alice | 30 | A | Engineer | 500 |
    | C002 | Bob | 25 | B | Designer | 300 |

---

### 다. 산술식을 이용한 검색

1. **문법**:
    
    SELECT 속성1, (속성2 + 숫자) AS 새속성명 FROM 테이블명;
    
2. **질의문**:
    
    고객 포인트에 100을 더한 값을 출력하시오.
    
3. **SQL문**:
    
    SELECT c_id, c_name, (points + 100) AS updated_points FROM customer;
    
4. **실행 결과**:
    
    
    | c_id | c_name | updated_points |
    | --- | --- | --- |
    | C001 | Alice | 600 |
    | C002 | Bob | 400 |

---

### 라. AND, OR를 포함한 조건검색

1. **문법**:
    
    SELECT * FROM 테이블명 WHERE 조건1 AND/OR 조건2;
    
2. **질의문**:
    
    포인트가 400 이상이거나 등급이 A인 고객을 검색하시오.
    
3. **SQL문**:
    
    SELECT * FROM customer WHERE points >= 400 OR grade = ‘A’;
    
4. **실행 결과**:
    
    
    | c_id | c_name | age | grade | job | points |
    | --- | --- | --- | --- | --- | --- |
    | C001 | Alice | 30 | A | Engineer | 500 |

---

### 마. LIKE를 이용한 검색

1. **문법**:
    
    SELECT * FROM 테이블명 WHERE 속성 LIKE ‘패턴’;
    
2. **질의문**:
    
    이름이 "A"로 시작하는 고객을 검색하시오.
    
3. **SQL문**:
    
    SELECT * FROM customer WHERE c_name LIKE ‘A%’;
    
4. **실행 결과**:
    
    
    | c_id | c_name | age | grade | job | points |
    | --- | --- | --- | --- | --- | --- |
    | C001 | Alice | 30 | A | Engineer | 500 |

---

### 바. NULL을 이용한 검색

1. **문법**:
    
    SELECT * FROM 테이블명 WHERE 속성 IS NULL;
    
2. **질의문**:
    
    직업 정보가 없는 고객을 검색하시오.
    
3. **SQL문**:
SELECT * FROM customer WHERE job IS NULL;
4. **실행 결과**:
(결과 없음)

---

### 사. 정렬이 포함된 검색

1. **문법**:
SELECT * FROM 테이블명 ORDER BY 속성 [ASC/DESC];
2. **질의문**:
    
    고객 데이터를 포인트 기준 내림차순으로 정렬하시오.
    
3. **SQL문**:
SELECT * FROM customer ORDER BY points DESC;
4. **실행 결과**:
    
    
    | c_id | c_name | age | grade | job | points |
    | --- | --- | --- | --- | --- | --- |
    | C001 | Alice | 30 | A | Engineer | 500 |
    | C002 | Bob | 25 | B | Designer | 300 |

---

### 아. 집계함수를 이용한 함수

1. **문법**:
    
    SELECT 함수(속성) FROM 테이블명;
    
2. **질의문**:
3. 
    
    고객의 총 포인트를 계산하시오.
    
4. **SQL문**:
SELECT SUM(points) AS total_points FROM customer;
5. **실행 결과**:
    
    
    | total_points |
    | --- |
    | 800 |

---

### 자. 그룹검색을 포함한 집계함수

1. **문법**:
SELECT 그룹속성, 함수(속성) FROM 테이블명 GROUP BY 그룹속성;
2. **질의문**:
    
    고객 등급별 총 포인트를 계산하시오.
    
3. **SQL문**:
SELECT grade, SUM(points) AS total_points FROM customer GROUP BY grade;
4. **실행 결과**:
    
    
    | grade | total_points |
    | --- | --- |
    | A | 500 |
    | B | 300 |

---

### 차. 동등조인을 포함한

1. **문법**:
    
    SELECT * FROM 테이블1 JOIN 테이블2 ON 조건;
    
2. **질의문**:
    
    주문 테이블과 고객 테이블을 조인하여 주문 정보와 고객 이름을 출력하시오.
    
3. **SQL문**:
    
    SELECT o.o_id, c.c_name, o.product, o.quantity
    FROM orders o
    INNER JOIN customer c
    ON o.customer = c.c_id;
    
4. **실행 결과**:
    
    
    | o_id | c_name | product | quantity |
    | --- | --- | --- | --- |
    | O001 | Alice | P001 | 2 |

---

### 카. 부속질의문 (IN)

1. **문법**:
SELECT * FROM 테이블명 WHERE 속성 IN (서브쿼리);
2. **질의문**:
    
    주문 테이블에서 Alice가 주문한 상품을 검색하시오.
    
3. **SQL문**:
SELECT * FROM orders WHERE customer IN (SELECT c_id FROM customer WHERE c_name = ‘Alice’);
4. **실행 결과**:
    
    
    | o_id | customer | product | quantity |
    | --- | --- | --- | --- |
    | O001 | C001 | P001 | 2 |

---

### 타. 부속질의문 (EXISTS)

1. **문법**:
    
    SELECT * FROM 테이블명 WHERE EXISTS (서브쿼리);
    
2. **질의문**:
    
    고객 중 주문 내역이 있는 고객을 검색하시오.
    
3. **SQL문**:
SELECT * FROM customer WHERE EXISTS (SELECT * FROM orders WHERE customer = customer.c_id);
4. **실행 결과**:
| c_id | c_name | age | grade | job | points |
|-------|--------|-----|-------|-----------|--------|
| C001 | Alice | 30 | A | Engineer | 500 |

---

### 파. 테이블 데이터 수정 (UPDATE)

1. **문법**:
UPDATE 테이블명 SET 속성 = 값 WHERE 조건;
2. **질의문**:
    
    고객 Bob의 포인트를 400으로 수정하시오.
    
3. **SQL문**:
    
    UPDATE customer SET points = 400 WHERE c_name = ‘Bob’;
    
4. **실행 결과**:
- 고객 \`Bob\`의 포인트가 400으로 수정됨.

---

### 하. 테이블 데이터 삭제 (DELETE)

1. **문법**:
    
    DELETE FROM 테이블명 WHERE 조건;
    
2. **질의문**:
    
    포인트가 300 이하인 고객 데이터를 삭제하시오.
    
3. **SQL문**:
    
    DELETE FROM customer WHERE points <= 300;
    
4. **실행 결과**:
- 고객 \`Bob\` 데이터 삭제 완료.

---

## 배운 점

1. SQL 문법과 다양한 조건, 연산자의 조합을 통해 데이터를 효율적으로 검색하는 방법을 배웠다.
2. 집계 함수와 그룹 검색을 통해 데이터 분석의 기본적인 기법을 익혔다.
3. 동등 조인과 부속질의문 등 테이블 간의 관계를 다루는 복잡한 쿼리를 작성할 수 있게 되었다.

## 느낀 점

1. 데이터를 다루는 데 있어 SQL의 강력함을 다시 한번 느낄 수 있었다.
2. 조인과 부속질의문을 통해 테이블 간 관계를 처리하며 복잡한 데이터베이스 구조를 이해할 수 있었다.
3. 집계 함수와 그룹화를 활용하면서 실질적인 데이터 분석에 응용 가능하다는 점이 좋았따.
4. 실습을 통해 이론적으로 배운 문법을 적용해 보며 오류를 수정하고 실행 결과를 확인하는 과정에서 SQL의 작성 능력을 늘릴 수 있었다.
`,
    codeExamples: [
      {
        language: "sql",
        description: "기본 SELECT 쿼리",
        code: `SELECT * FROM users WHERE age > 20;`,
      },
      {
        language: "sql",
        description: "GROUP BY 활용",
        code: `SELECT department, COUNT(*) as count 
FROM employees 
GROUP BY department;`,
      },
    ],
    assignments: [
      {
        title: "첫 번째 데이터베이스 설계하기",
        description:
          "학교 도서관 관리 시스템을 위한 데이터베이스를 설계해보세요.\n\n필요한 테이블:\n- 책\n- 회원\n- 대출 기록",
        dueDate: "2024-03-11",
      },
    ],
    resources: [
      {
        title: "SQL 기초 가이드",
        url: "https://www.w3schools.com/sql/",
        type: "documentation",
      },
      {
        title: "관계형 데이터베이스 디자인 원칙",
        url: "https://example.com/db-design",
        type: "article",
      },
    ],
  },
  {
    id: 2,
    week: 2,
    date: "2024-03-11",
    topic: "데이터 모델링",
    title: "ERD 설계와 정규화",
    summary: "엔티티 관계 다이어그램 작성과 데이터베이스 정규화 과정",
    keywords: ["ERD", "정규화", "1NF", "2NF", "3NF"],
    content: `# ERD 설계와 정규화

## 엔티티 관계 다이어그램 (ERD)

ERD는 데이터베이스의 논리적 구조를 시각적으로 표현한 것입니다.

### ERD 기본 요소
- 엔티티 (Entity)
- 속성 (Attribute)
- 관계 (Relationship)

## 데이터베이스 정규화

### 제1정규형 (1NF)
모든 속성은 원자값을 가져야 합니다.

### 제2정규형 (2NF)
부분 함수적 종속을 제거합니다.

### 제3정규형 (3NF)
이행적 종속을 제거합니다.
`,
    codeExamples: [
      {
        language: "sql",
        description: "정규화 예시 테이블",
        code: `CREATE TABLE Orders (
  order_id INT PRIMARY KEY,
  product_id INT,
  customer_id INT,
  quantity INT
);`,
      },
    ],
    assignments: [
      {
        title: "쇼핑몰 ERD 설계",
        description:
          "온라인 쇼핑몰 시스템의 ERD를 설계하고 정규화를 수행하세요.",
        dueDate: "2024-03-18",
      },
    ],
    resources: [
      {
        title: "ERD 설계 도구 - draw.io",
        url: "https://draw.io",
        type: "article",
      },
    ],
  },
];
