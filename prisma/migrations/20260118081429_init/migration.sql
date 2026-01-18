-- CreateTable
CREATE TABLE "author" (
    "author_id" SERIAL NOT NULL,
    "firstname" VARCHAR(50) NOT NULL,
    "secondname" VARCHAR(50) NOT NULL,
    "dateofbirth" DATE NOT NULL,
    "dateofdeath" DATE,
    "createdat" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "updatedat" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "person_id" INTEGER,

    CONSTRAINT "author_pkey" PRIMARY KEY ("author_id")
);

-- CreateTable
CREATE TABLE "book" (
    "book_id" SERIAL NOT NULL,
    "title" VARCHAR(200) NOT NULL,
    "amountofpages" INTEGER NOT NULL,
    "cost" DECIMAL(10,2) NOT NULL,
    "publisheryear" INTEGER NOT NULL,
    "publication" VARCHAR(100) NOT NULL,
    "copiesavailable" INTEGER NOT NULL DEFAULT 0,
    "createdat" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "updatedat" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "book_pkey" PRIMARY KEY ("book_id")
);

-- CreateTable
CREATE TABLE "fine" (
    "fine_id" SERIAL NOT NULL,
    "date" DATE NOT NULL DEFAULT CURRENT_DATE,
    "amount" DECIMAL(10,2) NOT NULL,
    "member_id" INTEGER NOT NULL,
    "loan_id" INTEGER NOT NULL,
    "createdat" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "updatedat" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "fine_pkey" PRIMARY KEY ("fine_id")
);

-- CreateTable
CREATE TABLE "genre" (
    "genre_id" SERIAL NOT NULL,
    "title" VARCHAR(50) NOT NULL,
    "createdat" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "updatedat" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "genre_pkey" PRIMARY KEY ("genre_id")
);

-- CreateTable
CREATE TABLE "loan" (
    "loan_id" SERIAL NOT NULL,
    "book_id" INTEGER NOT NULL,
    "member_id" INTEGER NOT NULL,
    "staff_id" INTEGER NOT NULL,
    "loandate" DATE NOT NULL DEFAULT CURRENT_DATE,
    "duedate" DATE NOT NULL,
    "returndate" DATE,

    CONSTRAINT "loan_pkey" PRIMARY KEY ("loan_id")
);

-- CreateTable
CREATE TABLE "member" (
    "member_id" SERIAL NOT NULL,
    "membershipdate" DATE NOT NULL DEFAULT CURRENT_DATE,
    "createdat" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "updatedat" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "person_id" INTEGER NOT NULL,

    CONSTRAINT "member_pkey" PRIMARY KEY ("member_id")
);

-- CreateTable
CREATE TABLE "staff" (
    "staff_id" SERIAL NOT NULL,
    "position" VARCHAR(50) NOT NULL,
    "education" VARCHAR(255) NOT NULL,
    "createdat" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "updatedat" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "person_id" INTEGER NOT NULL,

    CONSTRAINT "staff_pkey" PRIMARY KEY ("staff_id")
);

-- CreateTable
CREATE TABLE "bookauthor" (
    "bookauthor_id" SERIAL NOT NULL,
    "book_id" INTEGER NOT NULL,
    "author_id" INTEGER NOT NULL,
    "createdat" DATE NOT NULL DEFAULT CURRENT_DATE,
    "updatedat" DATE NOT NULL DEFAULT CURRENT_DATE,

    CONSTRAINT "bookauthor_pkey" PRIMARY KEY ("bookauthor_id")
);

-- CreateTable
CREATE TABLE "bookgenre" (
    "bookgenre_id" SERIAL NOT NULL,
    "book_id" INTEGER NOT NULL,
    "genre_id" INTEGER NOT NULL,
    "createdat" DATE NOT NULL DEFAULT CURRENT_DATE,
    "updatedat" DATE NOT NULL DEFAULT CURRENT_DATE,

    CONSTRAINT "bookgenre_pkey" PRIMARY KEY ("bookgenre_id")
);

-- CreateTable
CREATE TABLE "bookpublisher" (
    "bookpublisher_id" SERIAL NOT NULL,
    "book_id" INTEGER NOT NULL,
    "publisher_id" INTEGER NOT NULL,
    "dayofarrivaltolibrary" DATE NOT NULL,
    "createdat" DATE NOT NULL DEFAULT CURRENT_DATE,
    "updatedat" DATE NOT NULL DEFAULT CURRENT_DATE,

    CONSTRAINT "bookpublisher_pkey" PRIMARY KEY ("bookpublisher_id")
);

-- CreateTable
CREATE TABLE "person" (
    "person_id" SERIAL NOT NULL,
    "fullname" VARCHAR(255) NOT NULL,
    "phone" VARCHAR(50) NOT NULL,
    "email" VARCHAR(100) NOT NULL,
    "address" VARCHAR(255) NOT NULL,
    "createdat" DATE NOT NULL DEFAULT CURRENT_DATE,
    "updatedat" DATE NOT NULL DEFAULT CURRENT_DATE,

    CONSTRAINT "person_pkey" PRIMARY KEY ("person_id")
);

-- CreateTable
CREATE TABLE "publication" (
    "publication_id" SERIAL NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "dateofestablishment" DATE NOT NULL,
    "createdat" DATE NOT NULL DEFAULT CURRENT_DATE,
    "updatedat" DATE NOT NULL DEFAULT CURRENT_DATE,

    CONSTRAINT "publication_pkey" PRIMARY KEY ("publication_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "genre_title_key" ON "genre"("title");

-- AddForeignKey
ALTER TABLE "author" ADD CONSTRAINT "author_person_id_fkey" FOREIGN KEY ("person_id") REFERENCES "person"("person_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "fine" ADD CONSTRAINT "fine_loan_id_fkey" FOREIGN KEY ("loan_id") REFERENCES "loan"("loan_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "fine" ADD CONSTRAINT "fine_member_id_fkey" FOREIGN KEY ("member_id") REFERENCES "member"("member_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "loan" ADD CONSTRAINT "loan_book_id_fkey" FOREIGN KEY ("book_id") REFERENCES "book"("book_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "loan" ADD CONSTRAINT "loan_member_id_fkey" FOREIGN KEY ("member_id") REFERENCES "member"("member_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "loan" ADD CONSTRAINT "loan_staff_id_fkey" FOREIGN KEY ("staff_id") REFERENCES "staff"("staff_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "member" ADD CONSTRAINT "member_person_id_fkey" FOREIGN KEY ("person_id") REFERENCES "person"("person_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "staff" ADD CONSTRAINT "staff_person_id_fkey" FOREIGN KEY ("person_id") REFERENCES "person"("person_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "bookauthor" ADD CONSTRAINT "bookauthor_author_id_fkey" FOREIGN KEY ("author_id") REFERENCES "author"("author_id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "bookauthor" ADD CONSTRAINT "bookauthor_book_id_fkey" FOREIGN KEY ("book_id") REFERENCES "book"("book_id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "bookgenre" ADD CONSTRAINT "bookgenre_book_id_fkey" FOREIGN KEY ("book_id") REFERENCES "book"("book_id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "bookgenre" ADD CONSTRAINT "bookgenre_genre_id_fkey" FOREIGN KEY ("genre_id") REFERENCES "genre"("genre_id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "bookpublisher" ADD CONSTRAINT "bookpublisher_book_id_fkey" FOREIGN KEY ("book_id") REFERENCES "book"("book_id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "bookpublisher" ADD CONSTRAINT "bookpublisher_publisher_id_fkey" FOREIGN KEY ("publisher_id") REFERENCES "publication"("publication_id") ON DELETE CASCADE ON UPDATE NO ACTION;
