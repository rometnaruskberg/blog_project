import { 
    BaseEntity, 
    Column, 
    CreateDateColumn, 
    Entity, 
    ManyToOne, 
    PrimaryGeneratedColumn, 
    UpdateDateColumn,
} from "typeorm";

import User from "./User";
import Post from "./Post";

@Entity()

export default class Comment extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id!: string;
    @Column()
    postId!: string;
    @Column()
    authorId!: string;
    @Column('varchar', {length: 100})
    title: string;
    @Column('text')
    content: string;
    @Column('boolean', {default: false})
    published: boolean;
    @CreateDateColumn()
    createdAt: Date;
    @UpdateDateColumn()
    updatedAt: Date;

    @ManyToOne(() => User, (user)=> user.posts, {
        createForeignKeyConstraints: true
    })
    author: Promise<User>;
    @ManyToOne(()=> Post, (post) => post.author, {
        createForeignKeyConstraints: true
    })
    post: Promise<Post>;
}